/* eslint-disable react/prop-types */
const Batch = ({ setSelectBatch }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <label htmlFor="" className="font-bold">
          Select Batch:{" "}
        </label>
        <select
          className="border-2 my-[10px] px-5 py-3 cursor-pointer outline-none"
          onChange={(e) => setSelectBatch(e.target.value)}
          name=""
          id=""
        >
          <option value="regular">Regular</option>
          <option value="evening">Evening</option>
        </select>
      </div>
      <div>
        <label htmlFor="" className="font-bold">
          Select Session:{" "}
        </label>
        <select
          className="border-2 my-[10px] px-5 py-3 cursor-pointer outline-none"
          onChange={(e) => setSelectBatch(e.target.value)}
          name=""
          id=""
        >
          <option value="16">16th</option>
          <option value="17">17th</option>
          <option value="18">18th</option>
          <option value="19">19th</option>
          <option value="20">20th</option>
          <option value="21">21th</option>
          <option value="22">22th</option>
          <option value="23">23th</option>
          <option value="24">24th</option>
          <option value="25">25th</option>
          <option value="26">26th</option>
          <option value="27">27th</option>
        </select>
      </div>
    </div>
  );
};

export default Batch;
