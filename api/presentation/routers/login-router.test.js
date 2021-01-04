'use strict'

/**
 * TODO -> Criar classe em arquivo separado e importá-la
 */
class LoginRouter {
    
    route(httpRequest) {
        const { username, password } = httpRequest.body;
        if(!username || !password) {
            return {
                statusCode: 400
            }
        }        
    }

    _verifyCredentials(username, password) {
        /**
         * TODO
         * 
         * Pesquisa no Repository se o determinado usuário tem acesso ao sistema
         */
    }
}


describe("Login Router", () => {
    /*
    test("", () => {
        expect().toBeTruthy();
    });

    test("", () => {
        expect().toBeFalsy();
    });
    */

    test("Should return 400 if no email is provided", () => {
        const systemUnderTest = new LoginRouter();
        const httpRequest = {
            body: {
                password: "any_password"
            }
        }
        const httpResponse = systemUnderTest.route(httpRequest);
        expect(httpResponse.statusCode).toBe(400);
    });

    test("Should return 400 if no password is provided", () => {
        const systemUnderTest = new LoginRouter();
        const httpRequest = {
            body: {
                username: "any_username"
            }
        }

        const httpResponse = systemUnderTest.route(httpRequest);
        expect(httpResponse.statusCode).toBe(400);
    });

    /*
    test("Should return 401 if email or password are wrong", () => {
        const systemUnderTest = new LoginRouter();
        const httpRequest = {
            body: {
                username: "wrong_user",
                password: "wrong_password"
            }
        }
        const httpResponse = systemUnderTest.route(httpRequest);
        expect(httpResponse.statusCode).toBe(401)
    });
    */
});