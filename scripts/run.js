const main = async () => {
    const xContractFactory = await hre.ethers.getContractFactory("XPortal");
    const xContract = await xContractFactory.deploy();
    await xContract.deployed();
    console.log("Contract deployed to:", xContract.address);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0); // exit Node process without error
    } catch (error) {
      console.log(`epp, epp, JavaScript don join hands with solidity dey carry me where i no know.🏃‍♂️ 🏃${error}`);
      process.exit(1); // exit Node process while indicating 'Uncaught Fatal Exception' error
    }
    // Read more about Node exit ('process.exit(num)') status codes here: https://stackoverflow.com/a/47163396/7974948
  };
  
  runMain();