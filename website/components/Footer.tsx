import { createStyles, Container, Group, ActionIcon, Text, Anchor } from "@mantine/core"
import { IconBrandTwitter, IconBrandGithub, IconBrandInstagram } from "@tabler/icons"
import { MantineLogo } from "@mantine/ds"
import Link from "next/link"

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 60,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column"
    }
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md
    }
  }
}))

export function Footer() {
  const { classes } = useStyles()

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Text size='sm'>
          Built with ❤️ by{" "}
          <Anchor href='https://twitter.com/yagudaev' target='_blank'>
            Michael Yagudaev
          </Anchor>
        </Text>
        <Group spacing={0} className={classes.links} position='right' noWrap>
          <Link target='_blank' href='https://twitter.com/yagudaev'>
            <ActionIcon size='lg'>
              <IconBrandTwitter size={18} stroke={1.5} />
            </ActionIcon>
          </Link>
          <Link target='_blank' href='https://github.com/yagudaev'>
            <ActionIcon size='lg'>
              <IconBrandGithub size={18} stroke={1.5} />
            </ActionIcon>
          </Link>
        </Group>
      </Container>
    </div>
  )
}
