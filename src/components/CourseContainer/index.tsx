import React, { useState } from 'react';
import {
  IconButton,
  Avatar,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  IconButtonProps,
} from '@mui/material';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CardActions, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router';
import { Course } from 'models';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface CourseContainerProps {
  data: Course;
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

export default function CourseContainer({ data }: { data: Course }) {
  const [menu, setMenu] = useState<null | HTMLElement>(null);
  const [expanded, setExpanded] = useState(false);
  const open = Boolean(menu);
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenu(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setMenu(null);
  };

  const handleExpanded = () => {
    setExpanded(!expanded);
  };

  const goToEdit = () => {
    navigate(`/course/${data.id}`);
  };

  return (
    <Card sx={{ maxWidth: 400, margin: 2, minHeight: 380 }} variant='elevation' elevation={3}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500] }}
            aria-label='recipe'
            src='https://www.sibberhuuske.nl/wp-content/uploads/2016/10/default-avatar.png'
          />
        }
        action={
          <div>
            <IconButton
              aria-label='settings'
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id='basic-menu'
              anchorEl={menu}
              open={open}
              onClose={handleCloseMenu}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={goToEdit}>Chi tiết</MenuItem>
              <MenuItem onClick={goToEdit}>Chỉnh sửa</MenuItem>
              <MenuItem onClick={handleCloseMenu}>Xóa</MenuItem>
            </Menu>
          </div>
        }
        title={data.name}
        subheader={data.org}
      />
      <CardMedia component='img' height='194' image={data.media.image.large} alt='Paella dish' />
      <CardContent>
        <Typography paragraph color='text.secondary' style={{ wordWrap: 'break-word' }}>
          {!expanded && data.short_description != null
            ? `${data.short_description.substring(0, 75)}...`
            : data.short_description}
        </Typography>
      </CardContent>
      {data.short_description && data.short_description.length > 75 && (
        <CardActions disableSpacing sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography>{data.start_display}</Typography>
          <IconButton>
            <ExpandMoreIcon onClick={handleExpanded} aria-expanded={expanded} />
          </IconButton>
        </CardActions>
      )}
    </Card>
  );
}
