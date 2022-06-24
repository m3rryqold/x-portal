const main = async () => {
  const xContractFactory = await hre.ethers.getContractFactory("XPortal");
  const xContract = await xContractFactory.deploy();
  await xContract.deployed();
  console.log("Contract addy:", xContract.address);

  let waveCount;
  waveCount = await xContract.getTotalWaves();
  console.log(waveCount.toNumber());

  /**
   * Let's send a few waves!
   */
  let waveTxn = await xContract.wave("A message!");
  await waveTxn.wait(); // Wait for the transaction to be mined

  const [_, randomPerson] = await hre.ethers.getSigners();
  waveTxn = await xContract.connect(randomPerson).wave("Another message!");
  await waveTxn.wait(); // Wait for the transaction to be mined

  let allWaves = await xContract.getAllWaves();
  console.log(allWaves);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();