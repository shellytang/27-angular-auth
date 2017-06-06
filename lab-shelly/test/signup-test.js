// 'use strict';
//
// describe('testing auth signup form', function() {
//
//   beforeEach(() => {
//     angular.mock.module('cfgram');
//     angular.mock.inject(($rootScope, $componentController, $httpBackend) => {
//       this.$rootScope = $rootScope;
//       this.signupCtrl = $componentController('signup');
//       this.$httpBackend = $httpBackend;
//       // this.signupCtrl.authService = authService;
//       this.signupCtrl.$onInit();
//     });
//   });
//
//   afterEach(() => {
//     this.$httpBackend.verifyNoOutstandingExpectation();
//     this.$httpBackend.verifyNoOutstandingRequest();
//   });
//
//   afterEach(() => this.$rootScope.$apply());
//
//   it('should send data to the server', () => {
//     let expectUrl = 'http://localhost:3000/api/signup';
//     let expectBody = {
//       username: 'testingusername',
//       password: 'password123',
//       email: 'testemail@email.com',
//     };
//     let expectHeaders = {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//     };
// //make the request
//     this.signupCtrl.user = {
//       username: 'testingusername',
//       password: 'password123',
//       email: 'testemail@email.com',
//     };
//
//     this.$httpBackend.expectPOST(expectUrl, expectBody, expectHeaders)
//     .respond(200, 'exampletoken1234');
//
//     console.log('what?', this.signupCtrl);
//     console.log('what?', this.signupCtrl.authService);
//     this.signupCtrl.signup();
//     //flush backend
//     this.$httpBackend.flush();
//
//     // describe('testing the test', function(){
//     //   it('should pass this test', () => {
//     //     expect(true).toEqual(true);
//     //   });
//     // });
//
//   });
//
// });
