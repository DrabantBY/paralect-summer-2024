import { memo } from "react";
import { NumberFormatter } from "@mantine/core";

const styles = {
  fontSize: "var(--mantine-font-size-sm)",
  color: "var(--mantine-color-black)",
};

type CardMoneyPropsType = {
  value: number;
};

const CardMoney = memo((props: CardMoneyPropsType) => {
  return (
    <NumberFormatter {...props} prefix="$" thousandSeparator style={styles} />
  );
});

export default CardMoney;
