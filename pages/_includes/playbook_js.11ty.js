class Playbook {
    data() {
        return {
            templateEngineOverride: "11ty.js,html",
            layout: "playbook_html"
        };
    }
    render(data) {
        console.log("===============")
        console.log("title", data.title)
        console.log("===============")
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
                  <li>
                    ${data.page.url == "/playbook/managing-departments/" ?
                      `<strong>Managing Departments</strong>`
                    :
                      `<a class="lbh-link" href=${this.url("/playbook/managing-departments/")}>Managing Departments</a>`
                    }
                  </li>
                  <li>
                    ${data.page.url == "/playbook/google-sheets-import/" ?
                      `<strong>Importing Google Sheets</strong>`
                    :
                      `<a class="lbh-link" href=${this.url("/playbook/google-sheets-import/")}>Importing Google Sheets</a>`
                    }
                  </li>
                  <li>
                    ${data.page.url == "/playbook/using-glue-studio/" ?
                      `<strong>Using AWS Glue Studio</strong>`
                    :
                      `<a class="lbh-link" href=${this.url("/playbook/using-glue-studio/")}>Using AWS Glue Studio</a>`
                    }
                  </li>
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
