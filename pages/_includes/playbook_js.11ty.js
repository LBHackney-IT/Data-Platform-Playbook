class Playbook {
    data() {
        return {
            templateEngineOverride: "11ty.js,html",
            layout: "playbook_html"
        };
    }
    render(data) {
        const playbookNavItem = `${data.collections.playbook.map(playbookpage => {
          return `<li>
            ${data.page.url == playbookpage.url ?
              `<strong>${playbookpage.data.title}</strong>`
                :
                `<a class="lbh-link" href=${this.url(playbookpage.url)}>${playbookpage.data.title}</a>`
                }
                </li>`
          }).join('')
        }`
        return `
          <div class="govuk-breadcrumbs lbh-breadcrumbs lbh-container">
              <ol class="govuk-breadcrumbs__list">
                  <li class="govuk-breadcrumbs__list-item"><a class="govuk-breadcrumbs__link" href=${this.url("/")}>Home</a></li>
                  <li class="govuk-breadcrumbs__list-item" aria-current="page">${data.title}</li>
              </ol>
          </div>
          <h1 class="lbh-heading-h1">${data.title}</h1>

            <div class="lbh-playbook-layout">
              <div class="lbh-body lbh-playbook-nav">
                <p>${data.description}</p>
                <h4>Navigation</h4>
                <ol class="lbh-list lbh-list--number">
                    ${playbookNavItem}
                </ol>
              </div>
              <div class="lbh-body lbh-playbook-content">
                ${data.content ? data.content : ''}
              </div>
            </div>
        `
    }
}

module.exports = Playbook;
