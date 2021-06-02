import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ReactDataGrid from "@inovua/reactdatagrid-community";
// import "@inovua/reactdatagrid-community/index.css";
import "@inovua/reactdatagrid-community/base.css";
import "@inovua/reactdatagrid-community/theme/default-dark.css";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const gridStyle = { minHeight: 550 };

const CryptoGrid = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
//   const [videoModalActive, setVideomodalactive] = useState(false);

  const filterValue = [
    { name: 'wallet', operator: 'startsWith', type: 'string', value: '' },
    { name: 'amount', operator: 'startsWith', type: 'string', value: '' },
    { name: 'priority', operator: 'startsWith', type: 'string', value: '' },
    { name: 'pending', operator: 'startsWith', type: 'string', value: '' },
    { name: 'token', operator: 'startsWith', type: 'string', value: '' },
  ];

  const dataGrid = [
    {
      wallet: "0x6bf5e572d16C5061A5e6292059E5386194C2210b",
      amount: "$23.570.0999 WBNB",
      priority: "320",
      token: "ElonDoge (EDOGE)0xf01830E8642A33e8cfF5550D986D1031601C9f1a",
      pending: "5/22/2021, 9:48:14 AM",
    },
    {
      wallet: "0xccb43aC63D651A980ecc50251b904dc3bD1C40be",
      amount: "$47.170.1999 WBNB",
      priority: "255",
      token: "ElonDoge (EDOGE)0xf01830E8642A33e8cfF5550D986D1031601C9f1a",
      pending: "5/22/2021, 9:47:32 AM",
    },
    {
      wallet: "0xccb43aC63D651A980ecc50251b904dc3bD1C40be",
      amount: "$47.180.2000 WBNB",
      priority: "255",
      token: "ElonDoge (EDOGE)0xf01830E8642A33e8cfF5550D986D1031601C9f1a",
      pending: "5/22/2021, 9:47:08 AM",
    },
    {
      wallet: "0xccb43aC63D651A980ecc50251b904dc3bD1C40be",
      amount: "$47.180.2000 WBNB",
      priority: "255",
      token: "ElonDoge (EDOGE)0xf01830E8642A33e8cfF5550D986D1031601C9f1a",
      pending: "5/22/2021, 9:46:41 AM",
    },
    {
      wallet: "0x6bf5e572d16C5061A5e6292059E5386194C2210b",
      amount: "$11.810.0501 WBNB",
      priority: "320",
      token: "ElonDoge (EDOGE)0xf01830E8642A33e8cfF5550D986D1031601C9f1a",
      pending: "5/22/2021, 9:43:59 AM",
    },
    {
      wallet: "0x3a2595813A233b9F674f445AfC9CbB4C01Dd6Dce",
      amount: "$11.800.0500 WBNB",
      priority: "486",
      token: "NFTeaseToken (TEASE)0xbD32bAa54F0A52D927735918130638E7A4BD74cD",
      pending: "5/22/2021, 7:10:41 AM",
    },
    {
      wallet: "0x646135266E5fCA3Dd5c2aD6aDde86bAF93A52406",
      amount: "$21.320.0904 WBNB",
      priority: "515",
      token: "Dogone Token (🐶)0x44602b3b420EaE334AAb7D584DB9069a0d812809",
      pending: "5/22/2021, 7:02:05 AM",
    },
    {
      wallet: "0x03058a22C4fAAd6350cce2C5Be67292255ab398E",
      amount: "$2.330.0099 WBNB",
      priority: "252",
      token: "Dogone Token (🐶)0x44602b3b420EaE334AAb7D584DB9069a0d812809",
      pending: "5/22/2021, 6:17:23 AM",
    },
    {
      wallet: "0x03058a22C4fAAd6350cce2C5Be67292255ab398E",
      amount: "$11.790.0500 WBNB",
      priority: "252",
      token: "Dogone Token (🐶)0x44602b3b420EaE334AAb7D584DB9069a0d812809",
      pending: "5/22/2021, 6:10:14 AM",
    },
    {
      wallet: "0x03058a22C4fAAd6350cce2C5Be67292255ab398E",
      amount: "$2.350.0100 WBNB",
      priority: "252",
      token: "Dogone Token (🐶)0x44602b3b420EaE334AAb7D584DB9069a0d812809",
      pending: "5/22/2021, 6:05:05 AM",
    },
    {
      wallet: "0x03058a22C4fAAd6350cce2C5Be67292255ab398E",
      amount: "$2.270.0096 WBNB",
      priority: "252",
      token: "Dogone Token (🐶)0x44602b3b420EaE334AAb7D584DB9069a0d812809",
      pending: "5/22/2021, 6:03:41 AM",
    },
    {
      wallet: "0x03058a22C4fAAd6350cce2C5Be67292255ab398E",
      amount: "$2.280.0097 WBNB",
      priority: "252",
      token: "Dogone Token (🐶)0x44602b3b420EaE334AAb7D584DB9069a0d812809",
      pending: "5/22/2021, 6:02:56 AM",
    },
  ];

  const cryptoTableConfig = [
    {
      name: "wallet",
      header: "Wallet",
      defaultFlex: 2,
      textAlign: "center",
    },
    {
      name: "amount",
      header: "Amount",
      defaultFlex: 3,
      textAlign: "center",
    },
    {
      name: "priority",
      header: "Priority",
      defaultFlex: 4,
      textAlign: "center",
    },
    {
      name: "token",
      header: "Token",
      defaultFlex: 4,
      textAlign: "center",
    },
    {
      name: "pending",
      header: "Pending",
      defaultFlex: 4,
      dateFormat: "DD-MMMM-YYYY",
      textAlign: "center",
    },
  ];
//   const openModal = (e) => {
//     e.preventDefault();
//     setVideomodalactive(true);
//   };

//   const closeModal = (e) => {
//     e.preventDefault();
//     setVideomodalactive(false);
//   };

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container-md">
        <div className={{innerClasses}}>
          <div className="hero-content">
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              Top 100 Cryptocurrency by Market{" "}
              <span className="text-color-primary">Capitalization</span>
            </h1>
            <div style={{margin:40}}>
            <ReactDataGrid
              style={gridStyle}
              columns={cryptoTableConfig}
              dataSource={dataGrid}
              defaultFilterValue={filterValue}
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

CryptoGrid.propTypes = propTypes;
CryptoGrid.defaultProps = defaultProps;

export default CryptoGrid;
