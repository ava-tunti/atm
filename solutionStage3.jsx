const ATMDeposit = ({ onChange, isDeposit }) => {
  const choice = ["Deposit", "Cash Back"];
  console.log(`ATM isDeposit: ${isDeposit}`);
  return (
    <label className="label huge">
      <h3> {choice[Number(!isDeposit)]}</h3>
      <input type="number" width="200" onChange={onChange}></input>
      <input type="submit" width="200" value="Submit"></input>
    </label>
  );
};

const Account = () => {
  let deposit = 0; // state of this transaction
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);
  const [selectedOption, setSelectedOption] = React.useState(""); // State for selected option

  let status = `Account Balance $ ${totalState} `;
  console.log(`Account Rendered with isDeposit: ${isDeposit}`);
  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    deposit = Number(event.target.value);
  };
  const handleSubmit = () => {
    let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
    if (newTotal >= 0) {
      setTotalState(newTotal);
      event.preventDefault();
    }
    else {
      alert("Error. Not enough funds. Try again.");
      event.preventDefault();
    }
  };

  const handleSelectChange = event => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    if (selectedValue === "Deposit") {
      setIsDeposit(true);
    } else if (selectedValue === "Cash Back") {
      setIsDeposit(false);
    } else {
      setSelectedOption("");
      setIsDeposit(true); // Setting default mode to Deposit when nothing is selected
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 id="total">{status}</h2>
      <label>Select an action below to continue</label>
      <select onChange={handleSelectChange} value={selectedOption} name="mode" id="mode-select">
        <option value="">Select Option</option>
        <option value="
