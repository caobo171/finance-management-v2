import React, { useState, useEffect, useCallback } from "react";

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
	Col,
} from "reactstrap";
import Header from "components/Headers/Header";
import { useAllUsers } from "../../store/user/hooks";
import UserRow from "./UserRow";
import UserForm from "./UserForm";
import { User } from "../../store/user/types";

const Users = React.memo(() => {
	const users = useAllUsers();

	const [selectedUser, selectUser] = useState<User>();

	useEffect(() => {
		if (users.length > 0) {
			selectUser(users[0]);
		}
	}, [users]);

	const selectUserHandle = useCallback((user) => {
		selectUser(user);
	}, []);

	return (
		<>
			<Header />
			{/* Page content */}
			<Container className="mt--7" fluid>
				{/* Table */}
				<Row>
					<Col xl={6}>
						<Card className="shadow">
							<CardHeader className="border-0">
								<h3 className="mb-0">Users table</h3>
							</CardHeader>
							<Table
								className="align-items-center table-flush"
								responsive
							>
								<thead className="thead-light">
									<tr>
										<th scope="col">User Name</th>
										<th scope="col" />
										<th scope="col" />
									</tr>
								</thead>
								<tbody>
									{users.map((user) => (
										<UserRow
											user={user}
											selectUserHandle={selectUserHandle}
										/>
									))}
								</tbody>
							</Table>
							<CardFooter className="py-4"></CardFooter>
						</Card>
					</Col>
					<Col xl={6}>
						{selectedUser && <UserForm user={selectedUser} />}
					</Col>
				</Row>
			</Container>
		</>
	);
});

export default Users;
