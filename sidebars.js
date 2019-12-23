module.exports = {
  docs: [
      {
        type: "category",
        label: "Basics",
        items: [
          "getting-started-guide",
          "tutorial",
        ]
      },
      {
        type: "category",
        label: "Design",
        items: [
          "use-cases",
          "design-best-practices"
        ]
      },      
      {
        type: "category",
        label: "Writing an integration",
        items: [
          "dev-setup",
          "package-dir",
          "docker",          
          "yaml-file",
          "parameter-types",
          "code-conventions",   
          "fetching-incidents",
          "fetching-credentials",
          "long-running", 
          "dbot",
          "context-and-outputs",
          "context-standards",
          "dt"
        ]
      },
      {
        type: "category",
        label: "Writing Playbooks",
        items: [
          "playbooks",
          "playbook-conventions",
          "generic-polling"        
        ]
      },         
      {
        type: "category",
        label: "Testing",
        items: [
          "linting",
          "unit-testing",
          "testing",
          "circleci",
          "debugging"
        ]
      }, 
      {
        type: "category",
        label: "Documentation",
        items: [
          "integration-docs",
          "doc-structure",
          "changelog"
        ]
      }
    ]
};
