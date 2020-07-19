"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker = require('faker');
var GeneratorData = /** @class */ (function () {
    function GeneratorData() {
    }
    GeneratorData.prototype.generateUserFirstName = function () {
        return faker.name.firstName();
    };
    GeneratorData.prototype.generateLocation = function () {
        return faker.address.county();
    };
    GeneratorData.prototype.generateUserLastName = function () {
        return faker.name.lastName();
    };
    GeneratorData.prototype.generateUrl = function () {
        return faker.internet.url();
    };
    GeneratorData.prototype.generateZipCode = function () {
        return faker.address.zipCode();
    };
    GeneratorData.prototype.generateUserEmail = function () {
        return 'test2-' + this.generateRandomHash() + '@yopmail.com';
    };
    GeneratorData.prototype.generateUserPassword = function (length) {
        if (length === void 0) { length = 8; }
        var password = faker.internet.password(length, false, '[a-zA-Z0-9]');
        if (password.match(/^[0-9]+$/) !== null) {
            password = this.generateUserPassword(length);
        }
        return password;
    };
    GeneratorData.prototype.generateName = function () {
        return faker.company.companyName(0);
    };
    GeneratorData.prototype.generateDescription = function (wordCount) {
        if (wordCount === void 0) { wordCount = 4; }
        return faker.lorem.sentence(wordCount);
    };
    GeneratorData.prototype.generateRandomHash = function () {
        return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
    };
    GeneratorData.prototype.generateNumber = function () {
        return faker.random.number({ min: 10 });
    };
    return GeneratorData;
}());
exports.generatorData = new GeneratorData();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdG9yLmRhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZW5lcmF0b3IuZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUUvQjtJQUFBO0lBa0RBLENBQUM7SUFoRFUsNkNBQXFCLEdBQTVCO1FBQ0ksT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFTSx3Q0FBZ0IsR0FBdkI7UUFDSSxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVNLDRDQUFvQixHQUEzQjtRQUNJLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRU0sbUNBQVcsR0FBbEI7UUFDSSxPQUFPLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVNLHVDQUFlLEdBQXRCO1FBQ0ksT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFTSx5Q0FBaUIsR0FBeEI7UUFDSSxPQUFPLFFBQVEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxjQUFjLENBQUM7SUFDakUsQ0FBQztJQUVNLDRDQUFvQixHQUEzQixVQUE0QixNQUFVO1FBQVYsdUJBQUEsRUFBQSxVQUFVO1FBQ2xDLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDckUsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLElBQUksRUFBRTtZQUNyQyxRQUFRLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2hEO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQztJQUVNLG9DQUFZLEdBQW5CO1FBQ0ksT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU0sMkNBQW1CLEdBQTFCLFVBQTJCLFNBQWE7UUFBYiwwQkFBQSxFQUFBLGFBQWE7UUFDcEMsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRU0sMENBQWtCLEdBQXpCO1FBQ0ksT0FBTyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRU0sc0NBQWMsR0FBckI7UUFDSSxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVMLG9CQUFDO0FBQUQsQ0FBQyxBQWxERCxJQWtEQztBQUVZLFFBQUEsYUFBYSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUMifQ==