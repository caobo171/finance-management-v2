import React, { useCallback } from "react";
import { User } from "../../store/user/types";
import styled from "styled-components/macro";


const StyledButton = styled.div`
    padding: 12px;
    display: inline;
    
    font-size: 16px;

    &:hover {
        cursor: pointer;
    }
`

interface Props {
	user: User;
	selectUserHandle: (user: User) => void;
}
const UserRow = React.memo(({ user, selectUserHandle }: Props) => {
	const selectUser = useCallback(
		(e) => {
			
            selectUserHandle(user);
            e.preventDefault();
		},
		[user]
	);
	return (
		<tr>
			<td>{user.displayName}</td>
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
						src={user.photoURL}
					/>
				</a>
			</td>
			<td className="text-right">
				<StyledButton onClick={selectUser}>
					<i className="fa fa-edit text-blue" />
				</StyledButton>

				<StyledButton>
					<i className={"fa fa-trash text-red"} />
				</StyledButton>
			</td>
		</tr>
	);
});

export default UserRow;
