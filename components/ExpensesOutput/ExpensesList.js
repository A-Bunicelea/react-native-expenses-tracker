import { StyleSheet, FlatList, Text } from "react-native";
import ExpensesItem from "./ExpenseItem";

function renderExpenseItem(itemData) {
  return <ExpensesItem {...itemData.item} />;
}

export default function ExpensesList(props) {
  return (
    <FlatList
      data={props.expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({});
