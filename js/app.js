 var app = angular.module('myApp',['ngRoute']);

 app.config(function($routeProvider){
    $routeProvider
    .when('/',{
      templateUrl:'views/home.html',
      controller : "MainController"
    })
    .when('/form',{
      templateUrl:'views/form.html',
      controller : "formcontroller"
    })
     .otherwise({
      redirectTo:'/'
    });


});

      


      app.controller('MainController', ['$scope', 'datosFactory',function ($scope, datosFactory) {
      
        $scope.cv = datosFactory.getDatos();
        console.log($scope.cv);
             
      }])

    .filter('capitalize', function() {
        return function(input, scope) {
            if (input!=null)
            input = input.toLowerCase();
            return input.substring(0,1).toUpperCase()+input.substring(1);
          }
    });



 app.factory("datosFactory", function(){
    var entries = {
          "document": "CURRICULUM VITAE",
          "date": "2014-07-10T23:28:32.693Z",
          "firstname": "Ramón", 
          "surname": "Enrique",
           "lastname": "Aburto",
           "title": "Web Developer/Designer",
            "site": "https://bit.ly/raburto",
          "phones": {
             "movistar": "76092930",
             "claro": "88503574"
          },
          "social": {
             "fb": "kikeaburto.0",
             "tw": "kikeaburto",
             "in": "kikingke",
             "li": "ing-enrique-aburto-449337172"
          },
          "email":  "eabucam@gmail.com",

          "objetives": [
            "Ramón Aburto is a Nicaraguan Engineer and bilingual professional responsible, reliable, whom is easy to get along and that shows a lot of potential and knowledge on his area of expertise.",
          ],
          "skills": {
            "languages": [
              "C Sharp",
              "C++",
              "Python",
              "Java",
              "Javascript",
              "Typescript",
            ],
            "web": [
              "HTTP",
              "HTML5 & CSS3",
              "JSON",
              "ANGULARJS",
              "NODEJS",
              "Apache",
              "Entity Framework"
            ],
            "frameworks": [
              "AngularJS",
              "django",
              "Spring",
              "Hibernate"
            ],
            "DB": [
              "SQL Server",
              "MySQL"
            ],
            "IDE": [
              "Visual Studio",
              "Netbeans"
            ],
            "version control": [
              "GIT"
            ],
            "Development": [
              "Agile",
              "TDD",
              "REST",
            ],
          },
          "experience": [
            {
              "place": "Accedo Technologies",
              "period": "2018",
              "position": "Web Developer",
              "map": "Managua",
              "role": 
                "Using the knowledge in web design my team was in charged to create and edit requests from the clients that owns the web sites that we used to give them support."
              ,
              "technology": [
                "Bootstrap",
                "Javascript",
                "CMS",
                "CSS3"
              ]
            },
            {
              "place": "Concentrix Nicaragua",
              "period": "2017",
              "position": "Technical Support",
               "map": "Managua",
              "role": "I was in charged to answer emails and chats to a client from the Apple Company and users of the Apple Store in order to solve some issues with the purchases that the clients used to make everyday and give them the right information in order to have the best experience in technical support.",
              "technology": [
                "E-mail",
                "English",
                "Apple Devices",
                "Apple Store"
              ]
            },
             {
              "place": "Sitel Nicaragua",
              "period": "2016",
              "position": "Customer Service Representative",
               "map": "Managua",
              "role": 
                "I worked as customer service representative for an american company that offers service of hotels, room service and others related, to reserve as vacations or corporate travelers."
              ,
              "technology": [
                "E-mail",
                "English",
                "Apple Devices",
                "Apple Store"
              ]
            },
           {
              "place": "Manuel Hernández Martinez",
              "period": "2015",
              "position": "Substitute Teacher",
               "map": "Carazo",
              "role": 
                "I was substitute teacher for the grades from third to fifth on the academic year 2015, I though English to an amount of children between the ages of 10 and 18 years old."
              ,
              "technology": [
                "E-mail",
                "English",
                "Apple Devices",
                "Apple Store"
              ]
            }
          ],
          "education": [
            {
              "title": "Major in Information System Engineering",
              "speciality": "Web Systems",
              "place": "UNAN - Managua",
              "period": "2015"
            },
            {
              "title": "Major in English as a Foreign Language",
              "speciality": "Language",
              "place": "UNAN - Managua",
              "period": "2018"
            }
          ],
          "projectDescription":{
            "content":"Here are some of the projects that I made myself that could be interesting for any reader of this site or that is interested on my skills as professional."
          },
           "projects": [
            {
              "title": "CV 1.0",
              "description": "A responsive website template design to help organizing a Curriculum Vitae online, to promote professional skills, it was built with Bootstrap 4.3.1 and AngularJS."
            },
            {
              "title": "Agenda",
              "description": "Web App build with AngularJS and Firebase as backend that storage contact numbers online."
            },
            {
              "title": "AT",
              "description": "Web App that shows information as services, contact, and brief explanation of a Marketing Digital Agency"
            },
            {
              "title": "Major in English as a Foreign Language",
              "description": "Web Systems"
            },
            {
              "title": "Major in English as a Foreign Language",
              "description": "Web Systems"
            }
          ],
          "interests": [
            "Culture",
            "Technology",
            "Web",
            "Music",
            "Video Games",
            "Teach"
          ]
     }

    var interfaz = {
        getDatos: function(){
            return entries;
        },
        nuevoDato: function(descarga){
            entries.push(descarga);
        },
         guardarNombre: function(){
            descargasFactory.nombre = entries.firstname;
        }
    }
    return interfaz;
})
