import TableWrapper from "./components/TableWrapper";

const App = () => {
  return (
    <div className="container mx-auto">
      <TableWrapper>
        <table
          border={1}
          className="table-auto font-bold text-center border-2 border-[#000] table-ui w-full"
          cellPadding="0"
          cellSpacing={0}
        >
          <tr>
            <td
              className="text-[14px] border-[#000] border-2 bg-white border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap"
              rowSpan={2}
              colSpan={3}
            >
              Batch
            </td>
            <td
              className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center"
              rowSpan={2}
              colSpan={3}
            >
              Year/ Sem
            </td>
            <td
              className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center"
              rowSpan={2}
              colSpan={2}
            >
              Sem No
            </td>
            <td
              className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center"
              rowSpan={2}
              colSpan={2}
            >
              Room Number
            </td>
            <td
              className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center"
              rowSpan={2}
              colSpan={3}
            >
              09.00-10.20AM
            </td>
            <td
              className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center"
              rowSpan={2}
              colSpan={3}
            >
              10.30-11.50AM
            </td>

            <td
              className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap"
              colSpan={2}
            >
              12.00-02.00PM
            </td>
            <td className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap"></td>
            <td
              className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center whitespace-nowrap"
              colSpan={2}
            >
              02.00-04.00PM
            </td>
          </tr>
          <tr>
            <td className="text-[14px] border-[#000] border-2 relative !z-[-1] border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center">
              12.00-01.20PM
            </td>
            <td className="text-[14px] border-[#000] border-2 relative !z-[-1] border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center"></td>
            <td className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center"></td>
            <td className="text-[14px] border-[#000] border-2 relative !z-[-1] border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center">
              02.00-03.20PM
            </td>
            <td className="text-[14px] border-[#000] border-2 border-b-[1px] border-r-[1px] text-[#000] p-[16px] text-center"></td>
          </tr>
          {/* table body start here  */}

          {/* table footer */}

          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((item) => (
            <tr key={item}>
              <td
                className={`px-[16px] border-r-[1px]
              bg-white  py-[6px] text-[#000] border-[#000] border-2 text-[14px]`}
                colSpan={3}
              >
                27th
              </td>
              <td
                className={`px-[16px] border-r-[1px]
              bg-white  py-[6px] text-[#000] border-[#000] border-2 text-[14px]`}
                colSpan={3}
              >
                1/1/2022
              </td>
              <td
                className="px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px]"
                colSpan={2}
              >
                1st
              </td>
              <td
                className="px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px]"
                colSpan={2}
              >
                1029{" "}
              </td>
              <td
                colSpan={3}
                className={`px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px]`}
              >
                MTH-101 (Mathematics-I) SA
              </td>
              <td
                colSpan={3}
                className={`px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px]`}
              >
                CSE-121 (Structured Programming Language) HOR
              </td>
              <td
                className={`px-[16px] border-r-[0px] py-[6px] text-[#000] border-[#000] border-2 text-[14px] ${
                  item == 1 ? "border-r-0" : ""
                }`}
              >
                CSE-122 (Structured ProgrammingSessional) RN: 1020 HOR
              </td>
              <td
                className={`px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px]  ${
                  item == 1 ? "border-l-0" : ""
                }`}
              ></td>
              <td className="px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 border-t-0 border-b-0 text-[14px]"></td>
              <td className="px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px]">
                ENG-101(Foundation English) SNN
              </td>
              <td className="px-[16px] border-r-[1px] py-[6px] text-[#000] border-[#000] border-2 text-[14px]"></td>
            </tr>
          ))}
        </table>
      </TableWrapper>
    </div>
  );
};

export default App;
