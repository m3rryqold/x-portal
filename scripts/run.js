const main = async () => {
  const xContractFactory = await hre.ethers.getContractFactory("XPortal");
  const xContract = await xContractFactory.deploy({
    value: hre.ethers.utils.parseEther("0.1"),
  });
  await xContract.deployed();
  console.log("Contract addy:", xContract.address);

  let contractBalance = await hre.ethers.provider.getBalance(
    xContract.address
  );
  console.log(
    "Contract balance:",
    hre.ethers.utils.formatEther(contractBalance)
  );

  /*
   * Let's try two waves now
   */
  const waveTxn = await xContract.wave("This is wave #1");
  await waveTxn.wait();

  const waveTxn2 = await xContract.wave("This is wave #2");
  await waveTxn2.wait();

  contractBalance = await hre.ethers.provider.getBalance(xContract.address);
  console.log(
    "Contract balance:",
    hre.ethers.utils.formatEther(contractBalance)
  );

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