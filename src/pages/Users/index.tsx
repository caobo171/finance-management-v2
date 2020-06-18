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
import styled from "styled-components";


const STable = styled(Card)`
    tbody {
        display:block;
        max-height:450px;
        overflow:auto;
    }
    thead, tbody tr {
        display:table;
        width:100%;
        table-layout:fixed;/* even columns width , fix width of table too*/
    }
`

const Users = React.memo(() => {
	const users = useAllUsers();

	const [selectedUser, selectUser] = useState<User>();


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
					<Col xl={6} md={7} lg={0}>
						<STable className="shadow">
							<CardHeader className="border-0">
								<h3 className="mb-0">Users table</h3>
							</CardHeader>
							<Table
								className="align-items-center table-flush"

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
                                            key={user.id}
											user={user}
											selectUserHandle={selectUserHandle}
										/>
									))}
								</tbody>
							</Table>
							<CardFooter className="py-4"></CardFooter>
						</STable>
					</Col>
					<Col xl={6} md={5}>
						{selectedUser && <UserForm user={selectedUser} />}
					</Col>
				</Row>
			</Container>
		</>
	);
});

export default Users;
