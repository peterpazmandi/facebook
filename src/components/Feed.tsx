import { Box, styled, Skeleton, Stack } from '@mui/material'
import { useState } from 'react';
import Post from './Post';

const StyledBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    height: "100vh"
});

const Feed = () => {
	const [loading, setLoading] = useState(true);

	setTimeout(() => {
		setLoading(false);
	}, 3000);

	return (
		<StyledBox flex={4} p={{ xs: 0, md: 2 }}>
			{loading ? (
				<Stack spacing={1}>
					<Skeleton variant="text" height={100} />
					<Skeleton variant="text" height={20} />
					<Skeleton variant="text" height={20} />
					<Skeleton variant="rectangular" height={300} />
				</Stack>
			) : (
				<>
					<Post />
					<Post />
					<Post />
					<Post />
					<Post />
					<Post />
				</>
			)}
		</StyledBox>
	);
}

export default Feed