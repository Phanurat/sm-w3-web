const SimpleStorage = artifacts.require("SimpleStorage");

contract("SimpleStorage", (accounts) => {
  it("should store the value 89.", async () => {
    const simpleStorageInstance = await SimpleStorage.deployed();

    // ตั้งค่า value
    await simpleStorageInstance.set(89, { from: accounts[0] });

    // อ่านค่า value
    const storedData = await simpleStorageInstance.get.call();

    assert.equal(storedData, 89, "The value 89 was not stored.");
  });
});
