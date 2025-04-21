export class Calculator {
  constructor(public number: number) {}

  add(n: number): this {
    this.number += n;
    return this;
  }

  sub(n: number): this {
    this.number -= n;
    return this;
  }

  div(n: number): this {
    this.number /= n;
    return this;
  }

  mult(n: number): this {
    this.number *= n;
    return this;
  }
}

export class SubCalculator extends Calculator {
  pow(n: number): this {
    this.number **= n;
    return this;
  }
}

const calculator = new SubCalculator(10);
calculator.add(5).mult(2).div(2).sub(5).pow(2);
console.log(calculator);

// BUILDER - GoF

export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setmMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setUrl(url: 'get' | 'post'): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`Send data ${this.method} p/ ${this.url}`);
  }
}

// const request = new RequestBuilder(); // Builder
// // request.setUrl('http://www.google.com').setmMethod('post').send();
