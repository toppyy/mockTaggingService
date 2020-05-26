const tags = {

    // Mocks images[1].classifiers[0].classes
    ibm: {
        images: [
            {},
            {
                classifiers: [
                    {
                        classes: [
                            { 'class': 'elephant', 'score': 0.1238 },
                            { 'class': 'chicken', 'score': 0.8238 },
                            { 'class': 'rooster', 'score': 0.98238 }
                        ]
                    }
                ]
            }
        ]
    } 

       
    ,
    azure: {
        tags:[
            { 'name': 'mountain', 'confidence': 0.1238 },
            { 'name': 'lake', 'confidence': 0.8238 },
            { 'name': 'cloud', 'confidence': 0.98238 }
        ]
    },
    default: { tags:[
            { 'name': 'NULL', 'confidence': 0.1238 },
            { 'name': 'NA', 'confidence': 0.8238 },
            { 'name': 'undefined', 'confidence': 0.98238 }
        ]
    }

}


module.exports = tags