const pageSize = 20

var pageOne = { "items":[
    {"id":"https___www_vincent_luciani_com_sitemap_xml_6","category":"SQL","subCategory":"Select, Count, Order","question":"list of customers which name starts with “ra”.","answer":"where last_name like ‘ra%’"},
    {"id":"https___www_vincent_luciani_com_sitemap_xml_321","category":"JAVA","subCategory":"Dealing with Arrays","question":"Get the last key of a hash","answer":"myValue=myMap.lastKey();"},
    {"id":"https___www_vincent_luciani_com_sitemap_xml_261","category":"JAVA","subCategory":"Dealing with Strings","question":"Take characters from position i to j of a string and put in an array of character, putting the first character at position k in this array","answer":"myString.getChars(i,j,myArrayOfChars,k)"},
    {"id":"https___www_vincent_luciani_com_sitemap_xml_18","category":"SQL","subCategory":"group by","question":"not forget in grouping","answer":"when grouping by a column, must select this column + an agregator of any other column. Never select another column than the ones used in the grouping without any agregator"},
    {"id":"https___www_vincent_luciani_com_sitemap_xml_103","category":"PHP","subCategory":"Deal with files","question":"Unlock file","answer":"flock($filepointer,LOCK_UN);"},
    {"id":"https___www_vincent_luciani_com_sitemap_xml_83","category":"PHP","subCategory":"Logic","question":"check if a parameter is null","answer":"is_null($myparameter)"}],
"details":{"totalHits":324,"aggregations":{"category":{"doc_count_error_upper_bound":0,"sum_other_doc_count":0,
"buckets":[{"key":"PHP","doc_count":128,
    "subCategory":{"doc_count_error_upper_bound":0,"sum_other_doc_count":0,
    "buckets":[{"key":"Deal with strings","doc_count":44},{"key":"Deal with arrays","doc_count":24},{"key":"Deal with files","doc_count":16},{"key":"Logic","doc_count":16},{"key":"Functions and objects","doc_count":12},{"key":"PHP and SQL","doc_count":8},{"key":"Information about the request","doc_count":6},{"key":"Error handling","doc_count":2}]}},{"key":"JAVA","doc_count":124,"subCategory":{"doc_count_error_upper_bound":0,"sum_other_doc_count":0,"buckets":[{"key":"Dealing with Arrays","doc_count":39},{"key":"Dealing with Strings","doc_count":26},{"key":"Classes","doc_count":18},{"key":"Data types, variables and tables","doc_count":14},{"key":"Logic","doc_count":11},{"key":"Error Handling","doc_count":9},{"key":"Interfaces","doc_count":7}]}},{"key":"SQL","doc_count":72,"subCategory":{"doc_count_error_upper_bound":0,"sum_other_doc_count":0,"buckets":[{"key":"Advanced Select","doc_count":16},{"key":"Create and Modify Tables","doc_count":11},{"key":"Select, Count, Order","doc_count":11},{"key":"Indexes, Keys","doc_count":10},{"key":"User Administration","doc_count":8},{"key":"Joins","doc_count":7},{"key":"Update Insert Delete","doc_count":6},{"key":"group by","doc_count":3}]}}]}}}}


var pageTwo = {"items":[
    {"id":"https___www_vincent_luciani_com_sitemap_xml_296","category":"JAVA","subCategory":"Dealing with Arrays","question":"Create an array of objects with the ability to keep the objects in sequence and not accepting duplicates","answer":"Interface is Set Can use HashSet for very big arrays - uses a hash table HashSet myArray=new HashSet(); Can use LinkedHashSet to return sequences of objects. LinkedHashSet myArray=new LinkedHashSet();","highlight":{"question":["Create an <em>array</em> of objects with the ability to keep the objects in sequence and not accepting duplicates"],"answer":["Interface is Set Can use HashSet for very big <em>arrays</em> - uses a hash table HashSet myArray=new HashSet("]}},
    {"id":"https___www_vincent_luciani_com_sitemap_xml_307","category":"JAVA","subCategory":"Dealing with Arrays","question":"Create an array of object with the possibility to use bidirectional fifo functionality ( fifo + lifo )","answer":"Interface is Deque Can use class ArrayDeque","highlight":{"question":["Create an <em>array</em> of object with the possibility to use bidirectional fifo functionality ( fifo + lifo"]}},
    {"id":"https___www_vincent_luciani_com_sitemap_xml_292","category":"JAVA","subCategory":"Dealing with Arrays","question":"Create an array of objects with the ability to keep the objects in sequence and so for instance get the position of an element","answer":"Interface is List ArrayList myArray=new ArrayList(); The size of ArrayList augments automatically, but you can use myArray.ensureCapacity(n) to augment the capacity myArray.trimToSize() to reduce it to the minimum necessary to keep the existing elements in the array","highlight":{"question":["Create an <em>array</em> of objects with the ability to keep the objects in sequence and so for instance get the"],"answer":["capacity myArray.trimToSize() to reduce it to the minimum necessary to keep the existing elements in the <em>array</em>"]}},
    {"id":"https___www_vincent_luciani_com_sitemap_xml_303","category":"JAVA","subCategory":"Dealing with Arrays","question":"Create an array of object with the possibility to check with objects are the closest match to a given object","answer":"NavigableSet myArray=","highlight":{"question":["Create an <em>array</em> of object with the possibility to check with objects are the closest match to a given"]}},
    {"id":"https___www_vincent_luciani_com_sitemap_xml_294","category":"JAVA","subCategory":"Dealing with Arrays","question":"Get the position of the first occurence of an object in an array of object. What is the value if the object is not found","answer":"position=myArray.indexOf(object); if nothing is found, position is -1","highlight":{"question":["Get the position of the first occurence of an object in an <em>array</em> of object."]}},
    {"id":"https___www_vincent_luciani_com_sitemap_xml_295","category":"JAVA","subCategory":"Dealing with Arrays","question":"Get the position of the first occurence of an object in an array of object. What is the value if the object is not found","answer":"position=myArray.lastIndexOf(object); if nothing is found, position is -1","highlight":{"question":["Get the position of the first occurence of an object in an <em>array</em> of object."]}},
    {"id":"https___www_vincent_luciani_com_sitemap_xml_297","category":"JAVA","subCategory":"Dealing with Arrays","question":"Create an array of objects with the ability to keep the objects in sequence, not accepting duplicates and sorting elements inside ( as a result, you can return elements greater than a value)","answer":"Interface is SortedSet Can use TreeSet that gives instant access to lists of ordered data TreeSet myArray=new TreeSet();","highlight":{"question":["Create an <em>array</em> of objects with the ability to keep the objects in sequence, not accepting duplicates"]}}],"details":{"totalHits":47,"aggregations":{"category":{"doc_count_error_upper_bound":0,"sum_other_doc_count":0,"buckets":[{"key":"PHP","doc_count":25,"subCategory":{"doc_count_error_upper_bound":0,"sum_other_doc_count":0,"buckets":[{"key":"Deal with arrays","doc_count":21},{"key":"Deal with strings","doc_count":4}]}},{"key":"JAVA","doc_count":22,"subCategory":{"doc_count_error_upper_bound":0,"sum_other_doc_count":0,"buckets":[{"key":"Dealing with Arrays","doc_count":19},{"key":"Data types, variables and tables","doc_count":1},{"key":"Dealing with Strings","doc_count":1},{"key":"Logic","doc_count":1}]}}]}}}}


const  mockFetch = url => {
    console.log("using mockFetch")
    switch (url) {
        case "firstPage": {
            return pageOne
        }
        case "secondPage": {
            return pageTwo;
        }
        default:
        return pageOne;
    }

    
}



export default mockFetch