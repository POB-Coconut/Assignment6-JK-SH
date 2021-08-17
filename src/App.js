import React, { useState } from "react";
import styled from "styled-components";
import Form from "./components/Form";
import Result from "./components/Result";
import Timer from "./components/Timer";
import useForm from "./hooks/useForm";
import { validate } from "./utils/regex";

export default function App() {
	const [sortAscending, setSortAscending] = useState("");
	const [sortDescending, setSortDescending] = useState("");
	const dateOpt = { dateStyle: "full" };
	const korDate = new Date().toLocaleDateString("ko-KR", dateOpt);
	const engDate = new Date().toLocaleDateString("en-US", dateOpt);

	const sorting = (str) => {
		// string -> array
		let arr = str.split(",").map((x) => Number(x));
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
			return arr;
		}
		// setting State
		// concat
	};

	const { values, errors, handleChange, handleSubmit } = useForm(
		sorting,
		validate
	);

	return (
		<Wrap>
			<Timer>{korDate}</Timer>
			<Form
				values={values}
				errors={errors}
				handleSubmit={handleSubmit}
				handleChange={handleChange}
			></Form>
			<Result>{sorting("1,3,2,5")}</Result>
			<Result>{sorting("1,3,2,5").reverse()}</Result>
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
