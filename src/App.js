import React, { useState } from "react";
import styled from "styled-components";
import Form from "./components/Form";
import Result from "./components/Result";
import Timer from "./components/Timer";
import useForm from "./hooks/useForm";

export default function App() {
	const [sortAscending, setSortAscending] = useState("");
	const [sortDescending, setSortDescending] = useState("");
	const dateOpt = { dateStyle: "full" };
	const korDate = new Date().toLocaleDateString("ko-KR", dateOpt);
	const engDate = new Date().toLocaleDateString("en-US", dateOpt);

	const handleSort = (currentedValue) => {
		console.log(currentedValue);
		const newSortAscending = customSort(correctedValue, "asc");
		const newSortDescending = customSort(correctedValue, "desc");
		setSortAscending(newSortAscending);
		setSortDescending(newSortDescending);
		return true;
	};

	const customSort = (arr, opt) => {
		// string -> array
		// sort 메서드 구현 -> 내림/오름 차순
		for (let i = 0; i < arr.length; i++) {
			let swap;
			for (let j = 0; j < arr.length - 1; j++) {
				if (arr[j] > arr[j + 1]) {
					swap = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = swap;
				}
			}
			if (!swap) {
				break;
			}
		}
		if (opt === "desc") {
			return arr.toString();
		} else {
			return arr.reverse().toString();
		}
		// setting State
		// concat
	};

	const { value, correctedValue, handleChange, handleSubmit } = useForm(
		handleSort
	);

	return (
		<Wrap>
			<Timer>{korDate}</Timer>
			<Form
				value={value}
				handleSubmit={handleSubmit}
				handleChange={handleChange}
			></Form>
			<Result>{sortAscending}</Result>
			<Result>{sortDescending}</Result>
			<Timer>{engDate}</Timer>
		</Wrap>
	);
}

const Wrap = styled.div`
	margin: 30px auto;
	padding: 5px 10px;
	width: 500px;
	background-color: lightgray;
`;
