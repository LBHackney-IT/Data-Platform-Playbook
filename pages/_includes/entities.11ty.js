class Entities {
    data() {
        return {
            templateEngineOverride: "11ty.js,html",
            layout: "layout"
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
<div class="govuk-breadcrumbs lbh-breadcrumbs lbh-container">
    <ol class="govuk-breadcrumbs__list">
        <li class="govuk-breadcrumbs__list-item"><a class="govuk-breadcrumbs__link" href="${this.url('/')}">Home</a></li>
        <li class="govuk-breadcrumbs__list-item"><a class="govuk-breadcrumbs__link" href="${this.url('/dictionary')}">Data Dictionary</a></li>
        <li class="govuk-breadcrumbs__list-item" aria-current="page">${data.title}</li>
    </ol>
</div>
<h1>${data.title}</h1>

<details id="help-with-nationality" class="govuk-details lbh-details" data-module="govuk-details" open>
  <summary class="govuk-details__summary">
    <span class="govuk-details__summary-text"> Description </span>
  </summary>
  <div class="govuk-details__text">
  ${data.description}
  </div>
</details>

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
