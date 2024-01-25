from enum import Enum


class Channel(str, Enum):
    TERMINAL = 'TERMINAL'


class ExecutionState(str, Enum):
    IDLE = 'idle'
    COMPLETED = 'completed'


class MessageType(str, Enum):
    DISPLAY_DATA = 'display_data'
