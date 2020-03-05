class Car {
    constructor() {
        this._speed = 0;
        this._engineHealth = 100;
    }

    accelerate() {
        this._speed += 10;
        if (this._speed > 60) {
            this._engineHealth -= this._speed - 60;
            if (this._engineHealth < 0) {
                this._engineHealth = 0;
            }
        }
    }

    brake() {
        this._speed -= 10;
        if (this._speed < 0) {
            this._speed = 0;
        }
    }
    reset(){
        this._speed = 0;
        this._engineHealth = 100;
    }

    getEngineHealth() {
        return this._engineHealth;
    }

    getSpeed() {
        return this._speed;
    }
}