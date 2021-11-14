import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Menu, MenuItem } from '@mui/material';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

export default function CourseContainer() {
    const [menu, setMenu] = React.useState<null | HTMLElement>(null);
    const open = Boolean(menu);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setMenu(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setMenu(null);
    };


    return (
        <Card sx={{ maxWidth: 345, margin: 2 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src="https://www.sibberhuuske.nl/wp-content/uploads/2016/10/default-avatar.png" />
                }
                action={
                    <div>
                        <IconButton aria-label="settings" aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}>
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            id="basic-menu"
                            anchorEl={menu}
                            open={open}
                            onClose={handleCloseMenu}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleCloseMenu}>Chi tiết</MenuItem>
                            <MenuItem onClick={handleCloseMenu}>Chỉnh sửa</MenuItem>
                            <MenuItem onClick={handleCloseMenu}>Xóa</MenuItem>
                        </Menu>
                    </div>
                }
                title="Nguyễn Văn A"
                subheader="Đại học Bách Khoa Hà Nội"
            />
            <CardMedia
                component="img"
                height="194"
                image="http://www.learnod.com/img/courses/technical-analysis-online-course.jpg"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates hic iusto a eius deserunt libero dolore itaque numquam voluptas eligendi dicta, distinctio impedit quidem, aliquid excepturi. Blanditiis veniam voluptatem hic.
                </Typography>
            </CardContent>
        </Card>
    );
}
