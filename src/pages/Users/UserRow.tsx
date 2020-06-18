import React, { useCallback } from "react";
import {
	Badge,
	Card,
	CardHeader,
	CardFooter,
	DropdownMenu,
	DropdownItem,
	UncontrolledDropdown,
	DropdownToggle,
	Media,
	Pagination,
	PaginationItem,
	PaginationLink,
	Progress,
	Table,
	Container,
	Row,
	UncontrolledTooltip,
} from "reactstrap";
import { User } from "../../store/user/types";

interface Props {
    user: User;
    selectUserHandle: (user:User) => void;
}
const UserRow = React.memo(({ user , selectUserHandle}: Props) => {

    const selectUser = useCallback((e)=>{
        e.preventDefault();
        selectUserHandle(user);
    },[user])
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
				
                <i className={'fa fa-hand-pointer-o'}/>
                <i className={'fa fa-trash'}/>
                {/* <i className={'fa fa-trash'}/> */}
			</td>
		</tr>
	);
});

export default UserRow;
