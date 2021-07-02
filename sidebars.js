const fs = require('fs');
const path = require('path');

const getItems = (folder) =>{
  return fs.readdirSync(`./docs/${folder}/`).filter((f)=>{
    return f.includes(".md")
  }).map(file => {
      return `${folder}/${file.split(".")[0]}`
    })
}

module.exports = {
  docs: [
    "release-notes",
    {
      type: "category",
      label: "About",
      items: [
        "introduction",
        "zones",
        "environments"
        //'api_standards',
        //'platform_api_vs_service_api',
        //'documentation'
      ],
    },
    {
      type: "category",
      label: "Playbook",
      items: getItems("playbook"),
    },
    {
      type: "category",
      label: "Technical Documentation",
      items: getItems("docs"),
    },
    {
      type: "category",
      label: "Architecture Decision",
      items: [
        "architecture-decisions/index",
        {
          type: "category",
          label: "Records",
          items: getItems("architecture-decisions"),
        },
      ],
    },
    //   {
    //     type: 'category',
    //     label: 'Principles',
    //     items: [],
    //   },
    //     {
    //     type: 'category',
    //     label: 'Development Process',
    //     items: [
    //     {
    //       'Designing your API': ['api_implementation_guidelines','api_design_principles',
    //       {
    //         'Implementation Guidelines': ['general_guidelines','security', 'compatibility', 'deprecation', 'naming_conventions', 'http', 'resources', 'pagination', 'data-formats', 'operation', 'references']
    //       },
    //         'error_codes']
    //     },
    //
    //     {
    //       'API Practices and Tools': ['linting','static_code_analysis']
    //     },
    //     {
    //       'DevOps Practices': ['branching_strategies','deployment_pipeline', 'infrastructure']
    //     },
    //
    //     {
    //       type: 'category',
    //       label: 'API Setup',
    //       items: ['preferred_tech_stack', 'api_boilerplate', 'clean_architecture', 'serverless_lambda', 'entity_framework']
    //     }
    // ]
    // },
    // {
    //   type: 'category',
    //   label: "How to build an API",
    //   items: [{'Testing': ['tdd', 'unit_testing', 'mock_unit_tests', 'integration_tests']},{'Deploying your API': [ 'aws_ecs', 'lambda_best_practices', 'multiple_docker_containers']}]
    // },
    // {
    //   type: 'category',
    //   label: 'Monitoring',
    //   items: ['alerting', 'application_logging', 'centralised_logging', 'performance_monitoring','uptime_monitoring', 'x_ray']
    // },
    // {
    //   type: 'category',
    //   label: 'Securing your API',
    //   items: ['api_keys', 'lambda_authoriser']
    // },
    // {
    //   type: 'category',
    //   label: 'Production Checklist',
    //   items: ['debugging_apis', 'production_testing']
    // },
    // {
    //   type: 'category',
    //   label: 'Other Useful Information',
    //   items: ['rds_access', 'ec2_access','postgresql', {'Data Migration': ['data_migration','pipeline_implementation']}]
    // },
    // 'first_end_point',
    // 'developer_hub',
    // 'contact_us'
  ],
};
