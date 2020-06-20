import React, { useState, useEffect, useCallback, useMemo } from "react";

import {
	Card,
	CardHeader,
	CardFooter,
	Table,
	Container,
	Row,
	Col,
} from "reactstrap";
import Header from "components/Headers/Header";
import { useAllUsers } from "../../store/user/hooks";
import UserRow from "./UserRow";
import UserForm from "./UserForm";
import { User } from "../../store/user/types";
import TableHeader from "./TableHeader";
import styled from "styled-components";
import HomeStay from "store/homestay/types";
import { FAKE_HOMESTAY } from "store/homestay/function";

const STable = styled(Card)`
	tbody {
		display: block;
		max-height: 450px;
		overflow: auto;
	}
	thead,
	tbody tr {
		display: table;
		width: 100%;
		table-layout: fixed; /* even columns width , fix width of table too*/
	}
`;

const Users = React.memo(() => {
	const users = useAllUsers();
	const [selectedUser, selectUser] = useState<User>();
	const [homestay, selectHomeStay] = useState<HomeStay>();

	const selectUserHandle = useCallback((user) => {
		selectUser(user);
	}, []);

	const selectHomeStayHandle = useCallback(
		(home) => {
			selectHomeStay(home);
		},
		[homestay]
	);

	const filterUsers = useMemo(() => {
		return users.filter(
			(item) =>
                (item.placeId === (homestay?.id)) || 
                (!item.placeId && !homestay) ||
                (!item.placeId && homestay?.id === FAKE_HOMESTAY.id) ||
                (item.placeId === FAKE_HOMESTAY.id && !homestay)
		);
	}, [homestay, users]);

	return (
		<>
			<Header />
			{/* Page content */}
			<Container className="mt--7" fluid>
				{/* Table */}
				<Row>
					<Col xl={6} md={7} lg={0}>
						<STable className="shadow">
							<TableHeader
								selectHomeStayHandle={selectHomeStayHandle}
								homestay={homestay}
							/>
							<Table className="align-items-center table-flush">
								<thead className="thead-light">
									<tr>
										<th scope="col">User Name</th>
										<th scope="col" />
										<th scope="col" />
									</tr>
								</thead>
								<tbody>
									{filterUsers.map((user) => (
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
