"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[4384],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),h=i,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||r;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},618:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=["components"],s={id:"unit-testing-guide",title:"Guide to unit testing on the Data Platform",description:"A beginners guide to testing on the data platform",layout:"playbook_js",tags:["playbook"]},l=void 0,p={unversionedId:"playbook/transforming-data/guides-to-testing-in-the-platform/unit-testing-guide",id:"playbook/transforming-data/guides-to-testing-in-the-platform/unit-testing-guide",isDocsHomePage:!1,title:"Guide to unit testing on the Data Platform",description:"A beginners guide to testing on the data platform",source:"@site/docs/playbook/transforming-data/guides-to-testing-in-the-platform/004-unit-testing-guide.md",sourceDirName:"playbook/transforming-data/guides-to-testing-in-the-platform",slug:"/playbook/transforming-data/guides-to-testing-in-the-platform/unit-testing-guide",permalink:"/Data-Platform-Playbook/playbook/transforming-data/guides-to-testing-in-the-platform/unit-testing-guide",editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/playbook/transforming-data/guides-to-testing-in-the-platform/004-unit-testing-guide.md",tags:[{label:"playbook",permalink:"/Data-Platform-Playbook/tags/playbook"}],version:"current",sidebarPosition:4,frontMatter:{id:"unit-testing-guide",title:"Guide to unit testing on the Data Platform",description:"A beginners guide to testing on the data platform",layout:"playbook_js",tags:["playbook"]},sidebar:"docs",previous:{title:"Guide to testing data quality in Glue Jobs",permalink:"/Data-Platform-Playbook/playbook/transforming-data/guides-to-testing-in-the-platform/data-quality-testing-guide"},next:{title:"Using Glue Studio",permalink:"/Data-Platform-Playbook/playbook/transforming-data/using-aws-glue/using-glue-studio"}},u=[{value:"Context",id:"context",children:[]},{value:"Organising your code so it can be tested",id:"organising-your-code-so-it-can-be-tested",children:[]},{value:"Writing your own tests",id:"writing-your-own-tests",children:[]},{value:"CI/CD Pipeline",id:"cicd-pipeline",children:[]}],c={toc:u};function d(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"context"},"Context"),(0,r.kt)("p",null,"Historically, unit testing practices have helped:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Improve the speed at which PySpark scripts can be developed"),(0,r.kt)("li",{parentName:"ul"},"Provide documentation for each script with example data they\nexpect, and what results they output"),(0,r.kt)("li",{parentName:"ul"},"Increase the proportion of defects found before they reach staging environment"),(0,r.kt)("li",{parentName:"ul"},"Help those who come to maintain your script make their change without being scared\nof breaking existing functionality")),(0,r.kt)("p",null,"The most valuable code to test is the code which is subject to change,\nand has some complicated behaviour. We recommend that when writing PySpark\ncode which isn\u2019t exceedingly simple that you write some tests alongside that production code."),(0,r.kt)("p",null,"HackIT have produced ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/embed/M-_F_Tr6paQ"},"a video describing unit testing principles for C#"),"\nwhich are transferable to Spark scripts."),(0,r.kt)("h2",{id:"organising-your-code-so-it-can-be-tested"},"Organising your code so it can be tested"),(0,r.kt)("p",null,"Writing tests around your spark scripts require them to be written in a way which makes them easy to test."),(0,r.kt)("p",null,"Using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/Data-Platform/blob/2e4a89e280c326576a976b4f28c9b7faaa691ea4/scripts/address_cleaning.py#L16-L99"},"address cleaning")," as an example script, we have\nextracted all DataFrame manipulation code into a method, and then tested\nthe behaviours of that ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/Data-Platform/blob/2e4a89e280c326576a976b4f28c9b7faaa691ea4/scripts/test_address_cleaning.py#L7-L15"},"with tests"),"."),(0,r.kt)("p",null,'The "main" part of the ETL job which will run within the AWS Glue environment\nis then ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/Data-Platform/blob/2e4a89e280c326576a976b4f28c9b7faaa691ea4/scripts/address_cleaning.py#L103-L140"},"wrapped in a conditional")," which prevents\nthat code from being run within the testing environment. All code, except import statements, that isn't in a method should be included in this conditional.\nThe \u201cmain\u201d part is also the part where AWS connections should happen. Make sure that your testable methods, outside the \u201cmain\u201d part, don\u2019t require AWS connections, or you won\u2019t be able to test them locally."),(0,r.kt)("h2",{id:"writing-your-own-tests"},"Writing your own tests"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Before starting, pull the latest Data Platform code from GitHub. You need to have ",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"},"git")," working and ready in your IDE. In VSCode, you may need to use the bash command line for git commands to be recognised.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ensure that you run the tests and that they are all passing before writing your own tests.\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/Data-Platform/blob/main/scripts/README.md"},"README.md")," for instructions on how to do this.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create and check out a new branch to develop your tests. For example, if you are testing the individual cleaning scripts for Housing repairs Google sheets, you could use: ",(0,r.kt)("inlineCode",{parentName:"p"},"git checkout -b testing_housing_repairs_cleaning_scripts"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The tests are stored in the scripts folder of the project alongside the glue scripts themselves.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"There are 2 scenarios:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"In the ideal scenario, you should be writing your script and your tests at the same time. Start by creating your own glue job script as usual say, ",(0,r.kt)("inlineCode",{parentName:"li"},"jobs/script_name.py"),", and also a test file in the tests folder ",(0,r.kt)("inlineCode",{parentName:"li"},"tests/test_script_name.py"),'. Test files should be named with "test" at the beginning of the file. For example, ',(0,r.kt)("inlineCode",{parentName:"li"},"test_cleaning_script.py"),". If your job is department specific then both job script and test files should be in that departments subfolders."),(0,r.kt)("li",{parentName:"ul"},"In the non-ideal scenario, you are writing tests at posteriori for a script that already exists. Pick this script and create the corresponding test file in the tests folder named ",(0,r.kt)("inlineCode",{parentName:"li"},"tests/test_script_name.py"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You will need to organise your script (or reorganise it if it already exists) according to the ",(0,r.kt)("a",{parentName:"p",href:"#organising-your-code-so-it-can-be-tested"},"Organising your code so it can be tested")," above. For existing scripts, it includes adding the line\n",(0,r.kt)("inlineCode",{parentName:"p"},"if __name__ = \u201c__main__\u201d:"),"\nJust after the methods definitions and just before the part that reads arguments from the AWS environment (look at examples). Indent everything under this new line.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Define a function within ",(0,r.kt)("inlineCode",{parentName:"p"},"script_name.py"),", which takes in the input DataFrame(s), and returns the DataFrame to be written. (For existing scripts: take the processing code out of the main part and turn it into one or several methods).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Within your ",(0,r.kt)("inlineCode",{parentName:"p"},"test_script_name.py")," start creating tests. You can use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/Data-Platform/blob/main/scripts/test_spark_example.py"},"test_spark_example")," as a template and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/Data-Platform/blob/2e4a89e280c326576a976b4f28c9b7faaa691ea4/scripts/address_cleaning.py#L16-L99"},"address cleaning"),' as an example of a fully tested script. If you do, rename the class name into something relevant, for instance TestMechFireDpaCleaning.\nTest method names should start with a "test" in their name, otherwise the tests won\u2019t be run.\nEnsure the name clearly describes what is being tested.\nFor example, if you are testing the behaviour of adding a unique id column, then a suitable name may be along the lines of ',(0,r.kt)("inlineCode",{parentName:"p"},"test_creates_unique_id_column"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'There are some helper functions in the "helpers" folder, which you can use in your tests. For example, ',(0,r.kt)("inlineCode",{parentName:"p"},"dictionaryContains")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"assertions.py")," is a useful function that asserts that specific fields and values exist in an output, instead of asserting equality for a full data line.\nIf you do decide to use these functions, ensure you import them at the top of your test file, for example add ",(0,r.kt)("inlineCode",{parentName:"p"},"from helpers import assertions")," to access methods in the ",(0,r.kt)("inlineCode",{parentName:"p"},"assertions.py")," file.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If your script is using a logger, you will need to pass it into your testable method.\nSee the ",(0,r.kt)("inlineCode",{parentName:"p"},"clean_addresses")," function in the ",(0,r.kt)("inlineCode",{parentName:"p"},"test_address_cleaning.py")," for an example of how you can do this.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When you\u2019ve written your first test, run it using one of the commands in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/Data-Platform/blob/main/scripts/README.md"},"README.md"),". It is common practice to write a test in such a way that it initially fails, and then to change it to make it pass. This practice is called Test-driven development (TDD), for more information ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/embed/M-_F_Tr6paQ"},"this video")," talks through the principles of TDD.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you need to add any packages in order to write your tests, you can add them to the ",(0,r.kt)("inlineCode",{parentName:"p"},"requirements.test.txt")," file and they will be installed when you run your tests.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When you\u2019re happy with your test, commit your changes locally on your branch.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To have your tests published on the Data Platform, push your commits to GitHub and create a Pull Request on your branch, so others can review and merge your code."))),(0,r.kt)("p",null,"We use the following things to help write and run tests against pyspark scripts."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The testing framework that we use for the glue scripts is called ",(0,r.kt)("a",{parentName:"li",href:"https://docs.pytest.org/en/6.2.x/contents.html"},"Pytest"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/unittest.html"},"Unittest"),", is a testing framework like pytest, that has some helpful features that we use in some of the tests."),(0,r.kt)("li",{parentName:"ul"},"Docker is used to run the tests locally.\nWe use a ",(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/blogs/big-data/developing-aws-glue-etl-jobs-locally-using-a-container/"},"docker image provided by amazon")," that helps us replicate the environment that our glue jobs are run in.\nIt also has pyspark and pytest installed to allow us to easily run the tests. You will need ",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"docker installed")," to run tests locally.")),(0,r.kt)("h2",{id:"cicd-pipeline"},"CI/CD Pipeline"),(0,r.kt)("p",null,"The tests will run each time a commit is made to a branch including when branches are merged into main.\nThe build will not run/deploy if there are failing tests.\nThis is to prevent breaking changes from being deployed to the Data Platform staging environment."),(0,r.kt)("p",null,"This has been configured in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/Data-Platform/blob/main/.github/workflows/data_platform_stg.yml"},"Github workflows configuration file")))}d.isMDXComponent=!0}}]);