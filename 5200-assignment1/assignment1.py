import math

#Enter Query Here
query = "What is a symphony"

#Set Total Number of Documents
docList = 10

#Define stopwords (This system list is NLTK's list of english stopwords)
stopwords = ["i", "me", "my", "myself", "we", "our", "ours", "ourselves", 
             "you", "your", "yours", "yourself", "yourselves", "he", "him", 
             "his", "himself", "she", "her", "hers", "herself", "it", "its", 
             "itself", "they", "them", "their", "theirs", "themselves", "what", 
             "which", "who", "whom", "this", "that", "these", "those", "am", "is", 
             "are", "was", "were", "be", "been", "being", "have", "has", "had", "having", 
             "do", "does", "did", "doing", "a", "an", "the", "and", "but", "if", "or", 
             "because", "as", "until", "while", "of", "at", "by", "for", "with", "about", 
             "against", "between", "into", "through", "during", "before", "after", "above", 
             "below", "to", "from", "up", "down", "in", "out", "on", "off", "over", "under", 
             "again", "further", "then", "once", "here", "there", "when", "where", "why", "how", 
             "all", "any", "both", "each", "few", "more", "most", "other", "some", "such", "no", 
             "nor", "not", "only", "own", "same", "so", "than", "too", "very", "s", "t", "can", 
             "will", "just", "don", "should", "now"]

#Function to create a term set for the inputted query and assign it to a variable
def createQuerySet(query):
    global querySet
    query = query.lower()
    queryList = query.split()
    querySet = set(queryList)
    querySet = querySet
    return querySet

createQuerySet(query)

#Function to create a term set for each document
def createTermList(docList):
    #All terms from the documents
    allTerms = []
    #Final set of index terms from the documents
    global indexTerms
    #Storing each document set for when we need to create our matrixes 
    global allDocSets 
    allDocSets = {}
    #Loop through document list, create a term set, and assign it to a variable
    for i in range(docList):
        openDoc = open("doc" + str(i + 1) + ".txt")
        readDoc = openDoc.read()
        openDoc.close()
        #Lowercase each word and split document into list
        docList = readDoc.lower().split()
        #Create a set from each list and remove stopwords
        docSet = set(docList).difference(stopwords)
        #Store docSet in a dictionary for later use
        allDocSets[i+1] = docList
        #Append all docSets to a new array
        allTerms.append(docSet)
    #Combine the allTerms list
    indexTerms = [item for sublist in allTerms for item in sublist]
    #Remove duplicate terms
    indexTerms = set(indexTerms)
    #Sort the index terms alphabetically
    indexTerms = sorted(indexTerms)  
    return indexTerms

createTermList(docList)

#Function to determine whether query terms are contained in the list of indext terms
def compareQueryToIndex(querySet, indexTerms):
    #This variable will hold boolean values corresponding to whether or not the query term can be found in the index term list
    global queryBooleanVector
    queryBooleanVector = {}
    #Loop through the query set and check whether the element is contained in the list of index terms
    for i in querySet:
        #If the element is contained, input a 1. Else, input a 0
        if i in indexTerms:
          queryBooleanVector[i] = 1
        else:
          queryBooleanVector[i] = 0

compareQueryToIndex(querySet, indexTerms)

#Helper function to create the term frequency matrix
def createTermFrequencyMatrix(indexTerms):
    global termFrequencyMatrix
    termFrequencyMatrix = {}
    #Loop over the doc list and create the structure for the termFrequencymatrix
    for i in range(docList):
        termFrequencyMatrix[i+1] = {}
    for i in termFrequencyMatrix:
        #Iterate over index terms and count the number of times each term appears in the document
        for j in indexTerms:
            # print(i, j)
            termFrequencyMatrix[i][j] = str(list(allDocSets[i]).count(j))
    return termFrequencyMatrix

createTermFrequencyMatrix(indexTerms)

#Function to calculate the term frequency weight and store the values
def calculateTFW(indexTerms, termFrequencyMatrix):
    global indexTermsTFW
    indexTermsTFW = {}
    #Loop over the doc list and create the structure for the tfw matrix
    for i in range(docList):
        indexTermsTFW[i+1] = {}
    #Loop over the tfw matrix
    for i in termFrequencyMatrix:
        #Calculate the tfw weight for each value and store it
        for j in indexTerms:
            #This variable holds the maxTF for each document
            maxTF = int(max(termFrequencyMatrix[i].values()))
            #If the tf or max tf are not zero, calculate the value with the formula. Else, input 0. This logic is used to prevent Python error
            #that occurs when you try to divide a float by 0
            if maxTF != 0:
                indexTermsTFW[i][j] = 0.5+(0.5*float(termFrequencyMatrix[i][j])/int(maxTF))
            else:
                indexTermsTFW[i][j] = 0
    return indexTermsTFW

calculateTFW(indexTerms, termFrequencyMatrix)

#Helper function to create the information document frequency matrix
def createInformationDocumentFrequencyMatrix(indexTerms):
    global informationDocumentFrequencyMatrix
    informationDocumentFrequencyMatrix = {}
    #Loop over the doc list and create the structure for the idfw matrix
    for i in range(docList):
        informationDocumentFrequencyMatrix[i+1] = {}
    #Loop over the idfw matrix
    for i in informationDocumentFrequencyMatrix:
        #Check if each term is in the idfw matrix. If the term is included in the corresponding document,
        #then input a 1. Otherwise, input a 0
        for j in indexTerms:
            if j in allDocSets[i]:
                informationDocumentFrequencyMatrix[i][j] = 1
            else:
                informationDocumentFrequencyMatrix[i][j] = 0
    return informationDocumentFrequencyMatrix

createInformationDocumentFrequencyMatrix(indexTerms)

#Function to calculate the information document frequency weight and store the values
def calculateIDFW(indexTerms, informationDocumentFrequencyMatrix):
    global indexTermsIDFW
    indexTermsIDFW = {}
    i = 0
    #Loop over indexTerms, calulate the IDFW, and store the value for each term
    while i < len(indexTerms):
        indexTermsIDFW[indexTerms[i]] = math.log(docList/(sum(d[indexTerms[i]] for d in informationDocumentFrequencyMatrix.values() if d)), 10)
        i += 1
    return indexTermsIDFW

calculateIDFW(indexTerms, informationDocumentFrequencyMatrix)

def calculateWDT(indexTerms, indexTermsIDFW, indexTermsTFW):
    global indexTermsWDT
    indexTermsWDT = {}
    #Loop over the doc list and create the structure for the indexTermsWDT matrix
    for i in range(docList):
        indexTermsWDT[i+1] = {}
    #Loop over the tfw matrix
    for i in indexTermsTFW:
        #Calulate tfw*idfw for each term and store it
        for j in indexTerms:
            tfw = indexTermsTFW[i][j]
            idfw = indexTermsIDFW[j]
            indexTermsWDT[i][j] = tfw * idfw
    return indexTermsWDT

calculateWDT(indexTerms, indexTermsIDFW, indexTermsTFW)

#Function to format the query boolean vector before calculating the dot product
def createMatchedQueryBooleanVector(queryBooleanVector, indexTermsWDT, indexTerms):
    global matchedQueryBooleanVector
    matchedQueryBooleanVector = {}
    #Loop through the indexTermsWDT
    for i in indexTermsWDT:
        #Check compate each word in the query to the indexTerms list. If it is contained in indexTerms, input a 0.
        #Else, input a 1
        for j in indexTerms:
            if queryBooleanVector.get(j) != None:
                matchedQueryBooleanVector[j] = 1
            else:
                matchedQueryBooleanVector[j] = 0
    return matchedQueryBooleanVector
            
createMatchedQueryBooleanVector(queryBooleanVector, indexTermsWDT, indexTerms)

def calculateDotProduct(matchedQueryBooleanVector, indexTermsWDT, indexTerms):
    global dotProductResults
    dotProductResults = {}
    dotProduct = 0
    #Loop over docList and create structure for results
    for i in range(docList):
        dotProductResults[i+1] = {}
    #Loop over each document in the indexTermsWDT
    for i in indexTermsWDT:
        #Calculate the dotProduct, store the value, and reset the dot product
        for j in indexTerms:
            wdtValue = indexTermsWDT[i][j]
            queryBooleanValue = matchedQueryBooleanVector[j]
            dotProduct = wdtValue * queryBooleanValue + dotProduct
            dotProductResults[i] = dotProduct
        dotProduct = 0
    return dotProductResults

calculateDotProduct(matchedQueryBooleanVector, indexTermsWDT, indexTerms)

#Function to sort and format final results
def results(dotProductResults):
    global finalResult
    finalResult = ""
    resultCounter = 1
    #Sort the dot products in decreasing order
    resultsArray = sorted(dotProductResults.items(), key=lambda x:x[1], reverse=True)
    #Loop over result array and apply the specified format
    for i in resultsArray:
        finalResult += str(resultCounter) + ". Document" + " " + str(i[0]) + "\n"
        resultCounter += 1
    return finalResult

results(dotProductResults)

print(finalResult)

