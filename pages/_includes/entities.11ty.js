class Entities {
    data() {
        return {
            myName: "Zach",
            templateEngineOverride: "11ty.js,md",
            layout: "layout"
        };
    }
    render(data) {
        const relationships = data.relationships.map(relationship => `- ${relationship.relationship} [${relationship.entity}](lbh-hackney-data-platform-docs${data.collections.entity.find(entity => entity.fileSlug === relationship.entity).url})`
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
