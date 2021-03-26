class Entities {
    data() {
        return {
            templateEngineOverride: "11ty.js,html",
            layout: "entities_html"
        };
    }
    render(data) {
        const relationships = '<ul>' + data.relationships.map(
            relationship => 
            `<li> ${relationship.relationship} <a href="${
                this.url(data.collections.entities.find(entity => 
                    entity.fileSlug === relationship.entity).url)}">${relationship.entity}</a></li>`
        ).join("\n") + '</ul>';
        return `
<details id="help-with-nationality" class="govuk-details lbh-details" data-module="govuk-details" open>
  <summary class="govuk-details__summary">
    <span class="govuk-details__summary-text"> Relationships </span>
  </summary>
  <div class="govuk-details__text">
  ${relationships}
  </div>
</details>
${data.content ? 
`
<details id="help-with-nationality" class="govuk-details lbh-details" data-module="govuk-details" open>
<summary class="govuk-details__summary">
  <span class="govuk-details__summary-text"> Notes </span>
</summary>
<div class="govuk-details__text">
${data.content}
</div>
</details>` : ''
}
`;
    }
}

module.exports = Entities;
