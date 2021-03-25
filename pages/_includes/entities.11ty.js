const url =  require('@11ty/eleventy/src/Filters/Url');
class Entities {
    data() {
        return {
            myName: "Zach",
            templateEngineOverride: "11ty.js,md",
            layout: "layout"
        };
    }
    render(data) {
        const relationships = data.relationships.map(relationship => `- ${relationship.relationship} [${relationship.entity}](${url(data.collections.entity.find(entity => entity.fileSlug === relationship.entity).url)})`
        ).join("\n");
        return `# ${data.title}

## Description: 
${data.description}

## Relationships:
 ${relationships}

## Source:


## Notes:
${data.content}
`;
    }
}

module.exports = Entities;
