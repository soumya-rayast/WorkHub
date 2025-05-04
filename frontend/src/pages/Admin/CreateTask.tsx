import React, { useState } from 'react'
import DashboardLayout from '../../components/Layouts/DashboardLayout'
import { useLocation, useNavigate } from 'react-router-dom'
import { LuTrash } from 'react-icons/lu';
import { PRIORITY_DATA } from '../../utils/data';
import SelectDropdown from '../../components/Inputs/SelectDropdown';
import SelectUsers from '../../components/Inputs/SelectUsers';
import TodoListInput from '../../components/Inputs/TodoListInput';
import AddAttachmentsInput from '../../components/Inputs/AddAttachmentsInput';

const CreateTask = () => {
  const location = useLocation();
  const { taskId } = location.state || 0;
  const navigate = useNavigate();
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    priority: 'Low',
    dueDate: null,
    assignedTo: [],
    todoCheckList: [],
    attachments: [],
  })

  const [currentTask, setCurrentTask] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [openDeleteAlert, setOpenDeleteAlert] = useState(false);

  const handleValueChange = (key, value) => {
    setTaskData((prevData) => ({ ...prevData, [key]: value }))
  }
  const clearData = () => {
    //reset form 
    setTaskData({
      title: '',
      description: '',
      priority: 'Low',
      dueDate: null,
      assignedTo: [],
      todoCheckList: [],
      attachments: [],
    })
  }

  // Create Task 
  const createTask = async () => { };

  // Update Task 
  const updateTask = async () => { };

  // Submit form 
  const handleSubmit = async () => { };

  // Get task info by id 
  const getTaskDetailsById = async () => { };

  //Delete Task 
  const deleteTask = async () => { };


  return (
    <DashboardLayout activeMenu={'Create Task'}>
      <div className='mt-5'>
        <div className='grid grid-cols-1 md:grid-cols-4 mt-4'>
          <div className='form-card col-span-3'>
            <div className='flex items-center justify-between'>
              <h2 className='text-xl md:text-xl font-medium'>
                {taskId ? 'Update Task' : ' Create Task'}
              </h2>
              {
                taskId && (
                  <button
                    className='flex items-center gap-1.5 text-[13px] font-medium text-rose-500 bg-rose-50 rounded px-2 border border-rose-100 hover:border-rose-300 cursor-pointer'
                    onClick={() => setOpenDeleteAlert(true)}
                  >
                    <LuTrash className='text-base' /> Delete
                  </button>
                )
              }
            </div>
            <div className='mt-4'>
              <label className='text-xs font-medium text-slate-600'>
                Task Title
              </label>
              <input
                placeholder='Create App UI'
                className='form-input'
                value={taskData.title}
                onChange={({ target }) => handleValueChange('title', target.value)}
              />
            </div>
            <div className='mt-3'>
              <label className='text-xs font-medium text-slate-600'>
                Description
              </label>
              <textarea
                placeholder='Describe Task'
                className='form-input'
                rows={4}
                value={taskData.description}
                onChange={({ target }) => handleValueChange('description', target.value)}
              />
            </div>
            <div className='grid grid-cols-12 gap-4 mt-2'>
              <div className='col-span-6 md:col-span-4'>
                <label className='text-xs font-medium text-slate-600'>
                  Priority
                </label>
                <SelectDropdown
                  options={PRIORITY_DATA}
                  value={taskData.priority}
                  onChange={(value) => handleValueChange('priority', value)}
                  placeholder="Select Priority"
                />
              </div>
              <div className='col-span-6 md:col-span-4'>
                <label className='text-xs font-medium'>Due Date</label>
                <input
                  placeholder='Create App UI'
                  className='form-input'
                  type='date'
                  onChange={({ target }) => handleValueChange('dueDate', target.value)}
                />
              </div>

              <div className='col-span-12 md:col-span-3'>
                <label className='text-xs font-medium text-slate-600'>
                  Assign To
                </label>
                <SelectUsers
                  selectedUsers={taskData.assignedTo}
                  setSelectedUsers={(value) => {
                    handleValueChange('assignedTo', value)
                  }}
                />
              </div>
            </div>

            <div className='mt-3'>
              <label className='text-xs font-medium text-slate-600 '>
                TODO Checklist
              </label>
              <TodoListInput
                todoList={taskData?.todoCheckList}
                setTodoList={(value) =>
                  handleValueChange('todoChecklist', value)
                }
              />
            </div>
            <div className='mt-3'>
              <label className='text-xs font-medium text-slate-600'>
                Add Attachments
              </label>
              <AddAttachmentsInput
                attachments={taskData?.attachments}
                setAttachments={(value) =>
                  handleValueChange('attachments', value)
                }
              />
            </div>
            {
              error && (
                <p className='text-xs font-medium text-red-500 mt-5'>{error}</p>
              )
            }
            <div className='flex justify-end mt-7'>
              <button
                className='add-btn'
                onClick={handleSubmit}
                disabled
              >
                {taskId ? 'UPDATE TASK' : 'CREATE TASK'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default CreateTask
