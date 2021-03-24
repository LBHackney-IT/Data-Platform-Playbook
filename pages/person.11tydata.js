module.exports = {
    eleventyComputed: {
        computedRelationships: (data) => {
            console.log(data)
            return (data.relationships.map(relationship => ({...relationship, url: data.collections.entity.find(entity => entity.title === relationship.entity)})))
        }
        //     [
        //     {
        //         entity: "property",
        //         relationship: "lives in",
        //         url: "foobar"
        //     },
        //     {
        //         entity: "service",
        //         relationship: "accesses",
        //         url: "foobar2"
        //     }
        // ]
    }
};