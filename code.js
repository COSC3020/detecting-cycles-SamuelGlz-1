//Based on my work from last semester

function hasCycle(graph) {
    //let path = [];
    let visited = [];

    function innerCycle(current) {

        if (visited.includes(current)) {

            /*path.push(current)
            console.log("looped path was " + path)
            console.log("found loop ")*/

            return true;
        }

        visited.push(current);
        //path.push(current);
        
        for (const neighbor of Object.keys(graph[current])) {

            if (innerCycle(neighbor)) {
                return true;
            }
        }
        
        visited.pop();
        //path.pop();
        
        return false;

    }

    if ((Object.keys(graph).length > 0)) {

        for(const node of Object.keys(graph)){
            //console.log(node)
            if(innerCycle(node)){
                return true;
            }
        }   
        
        return false;
    }
}

/*
var graph = {'a': {'b': 7, 'e': 4},
    'b': {'c': 3, 'd': 8},
    'c': {},
    'd': {},
    'e': {'f':9, 'a':9},
    'f':{}};

//console.log(Object.keys(graph))
//console.log(graph[Object.keys(graph)[0]])

//console.log((graph)['e']);

console.log(hasCycle(graph))*/