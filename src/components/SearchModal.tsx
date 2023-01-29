import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  createDisclosure,
} from '@hope-ui/solid'

export default () => {
//   const keyword = createSignal('')
  const { isOpen, onOpen, onClose } = createDisclosure()
  return <>
    <Button onClick={onOpen}>添加歌曲</Button>
      <Modal opened={isOpen()} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>添加歌曲</ModalHeader>
          <ModalBody>
          <Tabs>
            <TabList>
                <Tab>搜索歌曲（网易云）</Tab>
                <Tab>排行榜</Tab>
            </TabList>
            <TabPanel>
                <Input placeholder="搜索歌曲" />
            </TabPanel>
            <TabPanel>2</TabPanel>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
  </>
}
