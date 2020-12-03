function expect(expected) {
    return {
      toBe(actual) {
        if (expected !== actual) {
          throw new Error(
            `Expected value: ${expected} didn't match with Actual value: ${actual}`
          );
        }
      },
      toEqual(actual) {
        if (expected !== actual) {
          throw new Error(
            `Expected value: ${expected} is not equal to Actual value: ${actual}`
          );
        }
      },
    };
  }
  
  async function test(title, callback) {
    try {
      await callback();
      console.log(`✅ ${title}`);
    } catch (e) {
      console.error(`❌ ${title}`);
      console.error(e);
    }
  }

  global.test = test
  global.expect = expect