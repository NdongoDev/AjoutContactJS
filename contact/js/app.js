function ContactsCtrl($scope) {
    $scope.contacts = [{nom:"Balde",
                        prenom:"Lamarana",
                        telephone:"+221 77 123 45 67",
                        email:"lamarana.balde01@gmail.com",
                        supprimer: false,
                        editer: false
                    }];

    $scope.addContact = function () {
        $scope.contacts.push({ nom: $scope.cNom,
                             prenom: $scope.cPrenom, 
                             telephone: $scope.cTelephone,
                             email: $scope.cEmail,
                             supprimer: false, 
                             editer: false
        });

        $scope.cNom = "";
        $scope.cPrenom= "";
        $scope.cTelephone = "";
        $scope.cEmail = "";
    };

    $scope.supprimerContact = function (index) {
        $scope.contacts[index].supprimer = true;
    };

    $scope.editerContact = function (index) {
        $scope.contacts[index].editer = true;
    };

    $scope.enregistrerContact = function (index) {
        $scope.contacts[index].editer = false;
    }


}