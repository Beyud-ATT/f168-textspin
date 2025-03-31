import { App, ConfigProvider } from "antd";

export default function ThemeProvider({ children }) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemBg: "",
            itemColor: "",
            itemHoverColor: "white",
            itemSelectedColor: "white",
            itemSelectedBg: "var(--orange-shade)",
            itemHoverBg: "var(--orange-shade)",
            horizontalItemHoverColor: "",
            horizontalItemSelectedColor: "",
            horizontalLineHeight: "",
            groupTitleColor: "",
            itemMarginBlock: "20px",
            itemPaddingInline: "14px",
          },
          Table: {
            headerBorderRadius: "11px",
            headerBg: "var(--orange-shade)",
          },
        },
      }}
    >
      <App>{children}</App>
    </ConfigProvider>
  );
}
