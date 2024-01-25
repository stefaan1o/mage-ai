from datetime import datetime

from mage_ai.server.kernels.active_kernel import get_active_kernel_client
from mage_ai.server.logger import Logger

logger = Logger().new_server_logger(__name__)


def get_messages(callback=None):
    now = datetime.utcnow()

    while True:
        try:
            client = get_active_kernel_client()

            print(client)

            message = client.get_iopub_msg(timeout=1)

            print('message:', message)

            if message.get('content'):
                if callback:
                    callback(message)
                else:
                    logger.warn(f'[{now}] No callback for message: {message}')
        except Exception as e:
            if str(e):
                logger.error(f'[{now}] Error: {e}', )
            pass
