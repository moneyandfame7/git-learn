import React, { useState } from "react";
import { Modal } from "antd";

const GreetingModal = () => {
	const [isOpen, setIsOpen] = useState<boolean>(true);
	const handleClose = () => setIsOpen(false);
	return (
		<Modal
			title="Basic Modal"
			open={isOpen}
			onOk={handleClose}
			onCancel={handleClose}
		>
			<p>Some contents...</p>
			<p>Some contents...</p>
			<p>Some contents...</p>
		</Modal>
	);
};

export default GreetingModal;
