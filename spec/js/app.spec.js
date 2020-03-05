describe('app.js manipulates the DOM to reflect the status of a Car object.', () => {
    let testCar;
    let testDiv;
    let testAccelerator;
    beforeEach(() => {
        testCar = new Car();
        testDiv = document.createElement('div');
        testAccelerator = document.createElement('button');
        makeAccelerator(testAccelerator, testDiv, testCar);
    });
    describe('showSpeed() - As the car accelerates, the innerText of the passed element reflects the cars speed.', () => {
        it('Without accelerating the car speed should be 0.', () => {
            showSpeed(testDiv, testCar);
            expect(testDiv.innerText).toBe('0');
        });
        it('After accelerating the car speed should be 10.', () => {
            testCar.accelerate();
            showSpeed(testDiv, testCar);
            expect(testDiv.innerText).toBe('10');
        });
    });
    describe('showSpeed() - As the car brakes, the innerText of the passed element reflects the cars speed.', () => {
        it('Braking to 10 should show a speed of 10.', () => {
            testCar.accelerate();
            testCar.accelerate();
            testCar.brake();
            showSpeed(testDiv, testCar);
            expect(testDiv.innerText).toBe('10');
        });
    });
    describe('makeAccelerator() - Creates an accelerator button out of the passed button, calls accelerate() one time when clicked.', () => {
        beforeEach(() => {});
        it('Clicking once on the new accelerator will increase the car\'s speed.', () => {
            testAccelerator.click();
            expect(testCar.getSpeed()).toBe(10);
        });
        it('Clicking once on the accelerator will increase the speedometer elements innerText to \'10\'.', () => {
            testAccelerator.click();
            expect(testDiv.innerText).toBe('10');
        });
    });
    describe('updateCheckEngineLight() - Changes the text and color of the passed element.', () => {
        let testCheckEngineDiv;
        beforeEach(() => {
            testCheckEngineDiv = document.createElement('div');
        })
        describe('When engine health goes below 100, the check engine light turns amber.', () => {
            it('Perfect engine health should leave light off.', () => {
                updateCheckEngineLight(testCheckEngineDiv, testCar);
                expect(testCheckEngineDiv.innerText).toBe('')
            });
            it('Engine health of 90 should turn light on.', () => {
                for (let i = 0; i < 7; i++) {
                    testAccelerator.click()
                }
                updateCheckEngineLight(testCheckEngineDiv, testCar);
                expect(testCheckEngineDiv.innerText).toBe('CHECK ENGINE');
            });
        });
    });
});
describe('The app.js file wires the elements of the Car.js and index.html files together.', () => {
    describe('The accelerator increases the displayed speed of the car.', () => {
        const accelerator = document.querySelector('.floorboard__accelerator');
        const speedometer = document.querySelector('.dashboard__speedometer');

        it('Hitting the accelerator once should increase the displayed speed to 10.', () => {
            accelerator.click();
            expect(speedometer.innerText).toBe('10');
        })
    })
});