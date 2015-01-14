var Auth = function (User) {

    this.isAuthenticated = function () {
        throw Error('TODO Implement');
    };

    this.isAdmin = function (user) {
        throw Error('TODO Implement');
    };

};

Auth.$inject = ['User'];

module.exports = Auth;