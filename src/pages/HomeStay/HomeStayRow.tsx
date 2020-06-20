import React, { useCallback } from "react";
import styled from "styled-components/macro";
import HomeStay from "store/homestay/types";


const StyledButton = styled.div`
    padding: 12px;
    display: inline;
    font-size: 16px;
    &:hover {
        cursor: pointer;
    }
`

interface Props {
	homestay: HomeStay;
	selecHomeStayHandle: (homestay: HomeStay) => void;
}
const HomeStayRow = React.memo(({ homestay, selecHomeStayHandle }: Props) => {
	const selecHomeStay = useCallback(
		(e) => {
			
            selecHomeStayHandle(homestay);
            e.preventDefault();
		},
		[homestay]
	);
	return (
		<tr>
			<td>{homestay.name}</td>
            <td>{homestay.description}</td>
			<td>
				{" "}
				<a
					className="avatar avatar-sm"
					href="#pablo"
					id="tooltip941738690"
					onClick={(e) => e.preventDefault()}
				>
					<img
						alt="..."
						className="rounded-circle"
						src={homestay.photoUrl}
					/>
				</a>
			</td>
			<td className="text-right">
				<StyledButton onClick={selecHomeStay}>
					<i className="fa fa-edit text-blue" />
				</StyledButton>

				<StyledButton>
					<i className={"fa fa-trash text-red"} />
				</StyledButton>
			</td>
		</tr>
	);
});

export default HomeStayRow;
